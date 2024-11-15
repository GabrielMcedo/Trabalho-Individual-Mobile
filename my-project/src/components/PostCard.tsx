import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface PostCardProps {
  name: string;
  text: string;
  imageUrl: string;
  avatarUrl: string;
}

const PostCard: React.FC<PostCardProps> = ({ name, text, imageUrl, avatarUrl }) => {
  return (
    <View style={styles.card}>
      {/* Cabeçalho do Post */}
      <View style={styles.header}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Imagem do Post */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Texto do Post */}
      <Text style={styles.text}>{text}</Text>

      {/* Botões de Interação */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B4F56',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#1c1e21', 
    marginBottom: 10,
    lineHeight: 18, 
    paddingBottom: 10, 
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f1f3f5',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    color: '#65676b', 
  },
});

export default PostCard;
