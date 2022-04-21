import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    addTask: {
        bottom: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor:'#fff',
        borderWidth: 2,
        borderColor: 'teal',
        borderRadius:20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize:18,
    },
    inputButton: {
        width: 50,
        height: 50,
        backgroundColor: 'teal',
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#edf5f9",
    },
    icon: {
        fontSize: 35,
        color: '#fff',
    }
})
export default styles;