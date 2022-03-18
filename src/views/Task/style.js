import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        alignItems: 'center',
        height: "100%",
    },
    imageIcon:{
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    label:{
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5,
    },
    input:{
        fontSize: 16,
        padding: 10,
        width: '92%',
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginHorizontal: 10,
    },
    inputArea:{
        fontSize: 16,
        padding: 10,
        width: '92%',
        borderWidth: 1,
        borderRadius: 10,
        height: 100,
        borderColor: '#EE6B26',
        marginHorizontal: 10,
        textAlignVertical: 'top',
    },
    inLine:{
        marginBottom: 120,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    inputInLine:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
    },
    switchLabel:{
        fontWeight: 'bold',
        color: '#EE6B26',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    removeLabel:{
        fontWeight: 'bold',
        color: '#20295F',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10,
    }
})

export default styles