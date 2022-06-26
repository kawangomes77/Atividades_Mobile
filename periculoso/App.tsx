
import React from "react";
import {  Input, Icon, Stack, Center, NativeBaseProvider, Button, Image, } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  const [show, setShow] = React.useState(false);
  const onPressLearnMore = () => {alert('AI CALICA');};
  return <Stack space={4} w="100%" alignItems="center">
  Chaves
  
 <Image size={150} resizeMode={"contain"} borderRadius={45}  style={{ width: '80%', height: '60%'}} source={{
      uri: "https://wallpaperaccess.com/full/1926779.jpg"
    }} alt="Alternate Text" />
 
      <Input w={{
      base: "85%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.900" />} placeholder="Nome" />
      <Input w={{
      base: "85%",
      md: "25%"
    }} type={show ? "text" : "Senha"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.900" onPress={() => setShow(!show)} />} placeholder="Senha" />
   <Button onPress={onPressLearnMore} title="Clica aqui" _light={{ bg: 'emerald.800' }} px="8" >MALANDRO</Button>
    </Stack>;
  
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    
    