import { View, Text, TextInput, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { saveSecureStore, getSecureStore } from '../../api/api'

const snipeSettings = () => {
    const [snipeItUrl, setSnipeItApiUrl] = useState(null)
    const [snipeItKey, setSnipeItApiKey] = useState(null)

    useEffect(() => {
      console.log("USE EFFECT Snipe IT Settings")
      async function loadSecureStore() {
        await getSecureStore('SnipeURL').then(SnipeUrl => setSnipeItApiUrl(SnipeUrl))
        await getSecureStore('SnipeKEY').then(SnipeKey => setSnipeItApiKey(SnipeKey))
      }
  
      loadSecureStore()
    }, [])

    const handleSaveSettings = async () => {
      await saveSecureStore('SnipeURL', snipeItUrl)
      await saveSecureStore('SnipeKEY', snipeItKey)
    }
    
  return (
    <View>
      <Text>Snipe IT URL</Text>
      <TextInput
        value={snipeItUrl}
        style={{height: 40}}
        placeholder="The URL of your Snipe IT Instance"
        onChangeText={newURL => setSnipeItApiUrl(newURL)}
      />
      

    <Text>Snipe IT API Key</Text>
      <TextInput
        style={{height: 40}}
        placeholder="paste your API Key here, it will overwrite the old Key!"
        onChangeText={newKey => setSnipeItApiKey(newKey)}
      />
      <Button title="Submit Settings" onPress={handleSaveSettings}/>
    </View>
  )
}

export default snipeSettings