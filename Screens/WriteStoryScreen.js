import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            author:"",
            storyText:""
        }   
    }
    
    submitStory=()=>{
        db.collection("stories").add({
            title:this.state.title,
            author:this.state.author,
            storyText:this.state.storyText
        })
        this.setState({
            title:"",
            author:"",
            storyText:"",
        })
        ToastAndroid.show('Your story has been sumitted' , ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Header 
                    centerComponent={{ text: 'StoryHub', style: { color: '#fff', fontSize: 20 }}}
                    backgroundColor={"purple"}
                />
                <TextInput
                    style={styles.title} 
                    onChangeText={text => { this.setState({ title: text })}}
                    value={this.state.title}
                    placeholder="title"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.author} 
                    onChangeText={text => { this.setState({ author: text })}}
                    value={this.state.author}
                    placeholder="title"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.storyText} 
                    onChangeText={text => { this.setState({ storyText: text })}}
                    value={this.state.storyText}
                    placeholder="title"
                    placeholderTextColor="black"
                />
                <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={() => { this.submitStory()}}
                > 
                    <Text style={styles.buttonText}>Submit</Text> 
                </TouchableOpacity>

            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color:'black',
        padding: 6,
  
    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
         padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10, 
        padding: 6,
    },
    submitButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40,color:'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color:'black',
    }
  });
  