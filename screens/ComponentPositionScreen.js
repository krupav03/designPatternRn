import React from "react";
import { View,Text,Button,Image } from "react-native";

// / ProfilePicture Component
const ProfilePicture = () =>  <Image
style={{ width: 200, height: 200 }}
source={{ uri: 'https://picsum.photos/200/300' }}
 />;

// ProfileDetails Component
const ProfileDetails = () => (
  <View>
    <Text>Name: John Doe</Text>
    <Text>Location: New York</Text>
  </View>
);

// ProfileActions Component
const ProfileActions = () => (
  <View>
    <Button title="Follow" onPress={() => {}} />
  </View>
);

// Profile Component using Composition
const Profile = () => {
    return(
        <View>
        <ProfilePicture />
        <ProfileDetails />
        <ProfileActions />
      </View>
    )
}

export default Profile;