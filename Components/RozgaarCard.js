import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const RozgaarCard = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.itemContainer}>
                <Image
                    source={require("../assets/Mask-Group-130.jpg")}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        Work on a gig or get part time & full time work
                    </Text>
                    <Text style={styles.detailText}>
                        An online freelance work platform where businesses and independent
                        skilled professionals can connect and collaborate remotely.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.hireBtn} >
                            <Text style={styles.btnText}>Hire a Freelancer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.earnBtn} >
                            <Text style={styles.btnText}>Earn money Freelancing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 20,
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        height: 550,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 50,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        width: 280
    },
    detailText: {
        fontSize: 14,
        width: 300
    },
    image: {
        height: 280,
        width: '100%',
    },
    textContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-evenly',
        width: '40%',
    },
    buttonContainer: {
        marginTop : 10,
        width: 200
    },
    hireBtn: {
        borderRadius: 5,
        backgroundColor: '#29A746',
        padding: 8,
        alignItems : 'center'

    },
    earnBtn: {
        borderRadius: 5,
        backgroundColor: '#0090FF',
        padding: 8,
        marginTop : 5,
        alignItems : 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF'
    }
})

export default RozgaarCard