import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, SecureTextField, TextField} from './components';

const App = () => {
  return (
    <View>
      <Button type={'primary'} size={'sm'} label={'smpri'} />
      <Button type={'secondary'} size={'sm'} label={'smse'} />
      <Button type={'basic'} size={'sm'} label={'smba'} />

      <Button type={'primary'} size={'md'} label={'mdpri'} />
      <Button type={'secondary'} size={'md'} label={'mdse'} />
      <Button type={'basic'} size={'md'} label={'mdba'} />

      <Button type={'primary'} size={'lg'} label={'lgpri'} />
      <Button type={'secondary'} size={'lg'} label={'lgse'} />
      <Button type={'basic'} size={'lg'} label={'lgba'} />
      <TextField
        type={'left'}
        size={'sm'}
        placeholder="hihi"
        error="hahhahahah"
      />
      {/* <Text>akwjshdjk</Text> */}
      <TextField error="dsahd" type={'center'} size={'lg'} placeholder="haha" />
      <SecureTextField type={'left'} size={'lg'} placeholder="password" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  s: {},
});
