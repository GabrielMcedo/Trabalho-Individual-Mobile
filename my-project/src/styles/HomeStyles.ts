import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eff1',
  },
  header: {
    backgroundColor: '#1877f2',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  createPost: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  addPostOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent: 'center', 
  },
  optionText: {
    fontSize: 14,
    color: '#1877f2',
    textAlign: 'center',
  },
  postButton: {
    backgroundColor: '#1877f2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  feed: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  storiesContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#1877f2',
    backgroundColor: '#f0f0f0',
  },
  storyText: {
    fontSize: 12,
    color: '#4B4F56',
    marginTop: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
});
