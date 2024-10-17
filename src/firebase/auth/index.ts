import { GoogleAuthProvider } from "firebase/auth";

type CookieValues = {
    token: string
    refreshToken: string
    userId: string
    [field: string]: unknown
}

const firebaseAuth = () => {
    const storageCookie = (values: CookieValues) => {

        const cookieValuesToKeyValueString = Object.keys(values).map((key) => {
            return `${key}=${values[key]}`
        }).join(',')

        console.log(cookieValuesToKeyValueString)

        const maxAge = 20 * 60 * 60
        document.cookie = `token=${cookieValuesToKeyValueString};max-age=${maxAge};path=/`

    }
    const google = () => {
        const provider = new GoogleAuthProvider()

        const resultHandler = ({ result }: { result: unknown }) => {
            storageCookie({
                userId: 'userId',
                token: 'token',
                refreshToken: 'refreshToken'
            })
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
            storageCookie({
                userId: 'userId',
                token: 'token',
                refreshToken: 'refreshToken'
            })
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