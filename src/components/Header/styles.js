import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 70,
        backgroundColor: "#20295f",
        borderBottomWidth: 5,
        borderBottomColor: "#EE6B26",
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftIcon:{
        position: "absolute",
        left: 20,
        bottom: 15,
    },
    leftIconImage:{
        width: 40,
        height: 40,
    },
    leftIconBackContaiber:{
        position: "absolute",
        left: 20,
        bottom: 15,
    },
    leftIconBackImage:{
        width: 30,
        height: 30,
    },
    logo:{
        width: 100,
        height: 30,
    },
    notification:{
        position: 'absolute',
        right: 20,
        bottom: 15,
    },
    notificationImage:{
        width: 25,
        height: 30,
    },
    circle:{
        width: 25,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 13,
        bottom: 13,
    },
    notificationText:{
        fontWeight: 'bold',
        color: "#EE6B26",
    }
})

export default styles;