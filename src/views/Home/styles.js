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
    title:{
        width: "100%",
        borderBottomColor: "#20295F",
        borderBottomWidth : 1,
        alignItems: "center",
        marginBottom: 15,
    },
    titleText:{
        color: "#20295F",
        fontSize: 18,
        position: "relative",
        top: 11,
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
    }
})

export default styles