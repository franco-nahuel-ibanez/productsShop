import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView, useWindowDimensions} from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNativator';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

const RegisterScreen = ({ navigation }: Props) => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.30}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            style={{marginBottom: 10}}
            accessoryLeft={<MyIcon name='person-outline' />}
          />

          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            accessoryLeft={<MyIcon name='email-outline' />}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom: 10}}
            accessoryLeft={<MyIcon name='lock-outline' />}
          />
        </Layout>

        <Layout style={{height: 20}} />

        <Button 
          onPress={() => console.log('hola')}
          accessoryRight={<MyIcon name='arrow-forward-outline' white/>}
        >
          Ingresar
        </Button>

        <Layout style={{height: 20}} />

        {/* crear cuenta */}
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => navigation.goBack()}>
            {' '}
            ingresar
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default RegisterScreen;
