import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        paddingTop: 24,
        height: 173,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textLogo1: {
        marginBottom: 10,
        paddingLeft: 10,
        color: '#4EA8DE',
        fontSize: 35,
        fontWeight: '900',
    },
    textLogo2: {
        marginBottom: 10,
        color: '#5E60CE',
        fontSize: 35,
        fontWeight: '900',
    },
    task: {
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: -30,
        justifyContent: 'center',
    },

    input: {
        backgroundColor: '#262626',
        height: 56,
        width: '70%',
        borderRadius: 6,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    textInputFocus: {
        borderWidth: 1,
        borderColor: '#9747FF',
        backgroundColor: '#262626',
        height: 56,
        width: '70%',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countTask: {
        flexDirection: 'row',
        marginTop: 32,
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        marginBottom: 20,
    },
    infoTask: {
        flexDirection: 'row',
    },

    textNew: {
        color: '#4EA8DE',
        fontWeight: "800",
    },
    textComplete: {
        color: '#5E60CE',
        fontWeight: "800",
    },
    countTextTask: {
        marginLeft: 10,
        backgroundColor: '#333333',
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 2,
        color: '#D9D9D9',
    },
    tasks: {
        marginHorizontal: 24,
        paddingTop: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333333',
    },
    emptyTask: {
        alignItems: 'center',
    },
    emptyTextTask: {
        lineHeight: 25,
        textAlign: 'center',
        fontSize: 18,
        color: '#808080',
    },
    textBold: {
        fontWeight: 'bold',
    }
})