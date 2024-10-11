import { GoogleAuthProvider } from "firebase/auth";

const firebaseAuth = () => {
    const google = () => {
        const provider = new GoogleAuthProvider()

        const resultHandler = ({ result }: { result: unknown }) => {
            console.log(result)
        }
        const errorHandler = ({ error }: { error: unknown }) => {
            console.log(error)
        }
        return {
            provider,
            resultHandler,
            errorHandler
        }

    }

    const emailPassword = () => {
        const resultHandler = ({ result }: { result: unknown }) => {
            console.log(result)
        }
        const errorHandler = ({ error }: { error: unknown }) => {
            console.log(error)
        }
        return {
            resultHandler,
            errorHandler
        }
    }

    return {
        google,
        emailPassword
    } as {
        [authName: string]: () => AuthReturnedField
    }
}

type AuthReturnedField = {
    resultHandler: (params: unknown) => void
    errorHandler: (params: unknown) => void
    provider?: unknown
}

const authInstances = firebaseAuth()

export { authInstances }