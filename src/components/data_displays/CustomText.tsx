import {Text} from "react-native"

interface CustomTextProps
{
    size: any
    weight: any
    children: string
}

function CustomText(props: CustomTextProps)
{
    return (
        <Text>
            {props.children}
        </Text>
    )
}

const defaultStyle = {

}

const size = {

}

const weight = {

}

export {CustomText}