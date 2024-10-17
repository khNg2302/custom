import { AuthProvider, signInWithPopup } from 'firebase/auth';
import { authInstances } from '../firebase/auth/index';
import { useCallback } from 'react';
import { auth } from '@/firebase';

export enum AuthInstance {
    GOOGLE = "google"
}

export const useAuth = () => {
    const getAuthInstance = useCallback(({ authInstance }: { authInstance: AuthInstance }) => {
        const authInstanceItem = authInstances[authInstance]
        if (!authInstanceItem) {
        }
        return {
            isInstance: authInstanceItem !== undefined,
            authValues: authInstanceItem()
        }
    }, [])
    const signInWithFirebasePopup = useCallback(({ authInstance, successHandler }: { authInstance: AuthInstance, successHandler: ({ }: unknown) => void }) => {
        const { isInstance, authValues } = getAuthInstance({ authInstance })
        if (!isInstance) return
        signInWithPopup(auth, authValues?.provider as AuthProvider).then(
            (result) => {
                successHandler({})
                authValues?.resultHandler({ result })
            }
        ).catch((error) => {
            authValues?.errorHandler({ error })
        })
    }, [getAuthInstance])
    // const signInWithFirebaseRedirect = useCallback(({ authInstance }: { authInstance: AuthInstance }) => {
    //     if (!localStorage) return
    //     const { isInstance, authValues } = getAuthInstance({ authInstance })
    //     if (!isInstance) return
    //     localStorage.setItem('auth-instance-redirect', authInstance)
    //     signInWithRedirect(auth, authValues?.provider as AuthProvider);
    // }, [getAuthInstance])
    // useEffect(() => {
    //     const authInstanceRedirect = localStorage.getItem('auth-instance-redirect') as AuthInstance
    //     if (!authInstanceRedirect) return
    //     const { isInstance, authValues } = getAuthInstance({ authInstance: authInstanceRedirect })
    //     if (!isInstance) return
    //     getRedirectResult(auth).then((result) => {
    //         authValues?.resultHandler({ result })
    //         localStorage.removeItem('auth-instance-redirect')
    //     }).catch((error) => {
    //         authValues?.errorHandler({ error })
    //     })
    // }, [getAuthInstance])
    return { signInWithFirebasePopup }
}