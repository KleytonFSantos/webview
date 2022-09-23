import React, { useEffect, useState} from 'react';
import { 
        Text, 
        View, 
        SafeAreaView,
        TouchableOpacity,
        FlatList
    } from 'react-native';

import database from "../../config/firebaseconfig";
import style from "./style";

export default function Task () {
    const [ tasks, setTasks ] = useState([]);

   

    return (
      <View>
        <Text>Tasks Page</Text>
      </View>
    );
};