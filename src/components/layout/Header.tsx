import Image from "next/image"
import logo from "@/public/favicon.ico"
import { FlexBox } from "../ui/containers/FlexBox"
import { Text } from "../ui/Text"
import { UserInfo } from "../features/UserInfo"

export const Header = () => {
    return (
        <header>
            <FlexBox flexDirection="row" styles={{justifyContent:'space-between', width: '100%'}}>
                <FlexBox flexDirection="row" styles={{ gap: '1.2rem', alignItems:'center' }}>
                    <Image src={logo} alt='logo' width={20} height={20} />
                    <Text level={'span'} style={{ fontSize: '1.8rem' }}>
                        Nock
                    </Text>
                </FlexBox>
                <FlexBox flexDirection="row">

                    <nav>

                    </nav>
                    <UserInfo />
                </FlexBox>
            </FlexBox>
        </header>)
}