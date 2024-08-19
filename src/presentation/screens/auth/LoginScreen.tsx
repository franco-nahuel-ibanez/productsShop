import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView, useWindowDimensions} from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNativator';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
  const {height} = useWindowDimensions();

  console.log("env", process.env.API_URL)

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor ingrese para ingresar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
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
          <Text>¿No tienes cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => navigation.navigate('RegisterScreen')}>
            {' '}
            Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default LoginScreen;
