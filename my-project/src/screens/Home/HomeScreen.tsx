import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import PostCard from '../../components/PostCard';
import { HomeStyles } from '../../styles/HomeStyles';

const HomeScreen: React.FC = () => {
  return (
    <View style={HomeStyles.container}>
      {/* Barra Superior */}
      <View style={HomeStyles.header}>
      <Image
  source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png' }}
  style={HomeStyles.logo}
    />
        <TextInput style={HomeStyles.searchInput} placeholder="Search" />
        <View style={HomeStyles.iconContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Facebook_Logo_%282019%29.svg' }}
            style={HomeStyles.icon}
          />
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Facebook_Messenger_logo_2023.svg' }}
            style={HomeStyles.icon}
          />
        </View>
      </View>

      {/* Caixa de Criação de Post */}
      <View style={HomeStyles.createPost}>
        <TextInput
          style={HomeStyles.input}
          placeholder="What's on your mind?"
          multiline
        />
        <View style={HomeStyles.addPostOptions}>
          <TouchableOpacity style={HomeStyles.optionButton}>
            <Text style={HomeStyles.optionText}>Photo/Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.optionButton}>
            <Text style={HomeStyles.optionText}>Feeling/Activity</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={HomeStyles.postButton}>
          <Text style={HomeStyles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Feed de Postagens */}
      <ScrollView style={HomeStyles.feed}>
        <PostCard
          name="John Doe"
          text="Just had a great day! #feelinghappy"
          imageUrl="https://www.w3schools.com/w3images/lights.jpg"
          avatarUrl="https://play-lh.googleusercontent.com/-Z_kFAMl2T9pKbZZyasAJ9FFfC8Qr-P6thGVaWIl0ZH-XH9iFRATdfuNwXgHeuSqxQ=w240-h480-rw" 
        />
        <PostCard
          name="Jane Smith"
          text="Learning React Native is awesome!"
          imageUrl="https://www.w3schools.com/w3images/fjords.jpg"
          avatarUrl="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
        />
        {/* Mais Postcards */}
      </ScrollView>

      {/* Section de Stories (no topo) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={HomeStyles.storiesContainer}>
        <View style={HomeStyles.story}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80/ff7f7f/fff?text=JD' }}
            style={HomeStyles.storyImage}
          />
          <Text style={HomeStyles.storyText}>John</Text>
        </View>
        <View style={HomeStyles.story}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80/7f7fff/fff?text=JS' }}
            style={HomeStyles.storyImage}
          />
          <Text style={HomeStyles.storyText}>Jane</Text>
        </View>
        <View style={HomeStyles.story}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80/ff7f7f/fff?text=MM' }}
            style={HomeStyles.storyImage}
          />
          <Text style={HomeStyles.storyText}>Mark</Text>
        </View>
        {/* Mais stories */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
