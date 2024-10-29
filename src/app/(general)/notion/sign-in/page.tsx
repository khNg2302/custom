import { SignInButton } from "@/components/common/SignInButton"
import { Text } from "@/components/ui/Text"

const NotionSignIn = () => {
    return <>
        <Text level={1} style={{ textAlign: 'center' }} >
            Your Ideas, Documents, & Plans. Unified. Welcome to <span style={{ textDecoration: 'underline' }}>Jotion</span>.
        </Text>
        <Text level="p" style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 600 }} >
            Jotion is the connected workspace where <br /> better, faster work happens.
        </Text>

        <div style={{display:'flex', justifyContent:'center'}}>
            <SignInButton label='Enter Jotion' />
        </div>
    </>
}

export default NotionSignIn