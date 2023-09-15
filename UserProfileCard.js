import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const UserProfileCard = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUserProfile(response.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!userProfile) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Card>
      <Card.Cover source={{ uri: userProfile.picture.large }} />
      <Card.Content>
        <Title>{`${userProfile.name.first} ${userProfile.name.last}`}</Title>
        <Paragraph>Gender: {userProfile.gender}</Paragraph>
        <Paragraph>Contact No.: {userProfile.phone}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default UserProfileCard;
