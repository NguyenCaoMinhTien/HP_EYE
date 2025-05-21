import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

const MainScreen = () => (
    <ImageBackground 
      source={require('./images/homebackground.jpg')}
      style={styles.homeBackground}
    >
      <Text style={styles.logo}>HP-EYE</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.libContainer}>
            <Text style={styles.welcomeText}>Welcome to HP-EYE</Text>
            <Text style={styles.descriptionText}>
                Experience the elegance and power of modern technology with HP-EYE. 
                Scroll down for more information and features of our application.
            </Text>
            <Text style={styles.contentText}>Content Section 1: Explore the features of HP-EYE that make it unique in the market.</Text>
            <Text style={styles.contentText}>Content Section 2: Learn how to utilize the advanced AI-driven technology to simplify your life.</Text>
            <Text style={styles.contentText}>Content Section 3: Discover the seamless integration with your existing systems.</Text>
            <Text style={styles.contentText}>Content Section 4: Understand our commitment to user privacy and data security.</Text>
            <Text style={styles.contentText}>Content Section 5: Stay tuned for regular updates and new features.</Text>
            <Text style={styles.contentText}>Content Section 6: Join our community to share your experiences and feedback.</Text>
            <Text style={styles.contentText}>Content Section 7: Contact us anytime for support or inquiries.</Text>

        </View>
      </ScrollView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    homeBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'top',
        alignItems: 'center',
        borderRadius:20,
    },
    libContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        marginTop: 30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        padding: 20,
        marginBottom: 20,
    },
    logo: {
        marginTop: 50,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 'bold',
        fontSize: 36,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        color: '#333',
        marginTop: 10,
        fontFamily: 'PlayfairDisplay-Regular',
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: '#666',
        marginTop: 15,
        fontFamily: 'PlayfairDisplay-Regular',
    },
    contentText: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        color: '#555',
        marginTop: 10,
        fontFamily: 'PlayfairDisplay-Regular',
    },
});

export default MainScreen;
