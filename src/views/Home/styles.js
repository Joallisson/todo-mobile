import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: "100%",
    },
    filter:{
        flexDirection: "row",
        width: "100%",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },
    filterTextActived:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#EE6B26",
    },
    filterTextInative:{
        color: "#20295F",
        fontWeight: "bold",
        fontSize: 18,
        opacity: 0.5,
    },
})

export default styles