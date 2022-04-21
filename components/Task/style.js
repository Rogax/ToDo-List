import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    items: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#41c572',
        alignItems: 'center',
        justifyContent: 'center',
      },
      index: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
      },
      content: {
        width: '80%',
        fontSize: 15,
      }
})
export default styles;