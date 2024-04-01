import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    // Function to get the current date in a readable format
    const getCurrentDate = () => {
        const date = new Date();
        return date.toDateString();
    };

    return (
        <MainLayout>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Text style={{ fontSize: 18, marginBottom: 10 }}>Coded By: Justin James Marquez</Text>
                <Text style={{ fontSize: 16, marginBottom: 20 }}>Current Date: {getCurrentDate()}</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
};

export default AboutScreen;
