import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body
} from 'native-base'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/LoggedOut';
import colors from '../../styles/colors'; 
import RoundedButton from '../components/RoundedButton';

const shelogo = require('../../assets/images/shelogo.png'); 

export default class LoggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            
            <Container style={styles.wrapper}>
            
                 <StatusBar
                    backgroundColor={colors.green03}
                    barStyle="light-content"
                    />
                <LinearGradient style={styles.welcomeWrapper} colors={['#227093','#00838F','#7ed6df']}>
                <Image
                        source={shelogo}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}> 
                     Welcome to SHE Mobile. </Text>
                    <RoundedButton
                    text="Continue with Login"
                    textColor={colors.white}
                    background={colors.green01}
                    icon={<Icon name="user-circle" size={20} style={styles.facebookButtonIcon} />}
                    handleOnPress={this.onFacebookPress}
                    />
                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}> 
                        By tapping continue, I agree to Safety Health Environment
                        </Text>
                        <Text style={styles.termsText}> 
                        {"Mobile's "}
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Terms of Services</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payments Terms of Services</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>and Privacy Policy </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>by Semen Indonesia. </Text>
                    </View>
                </LinearGradient>
                <Footer style={styles.footer}>
                    <Title>Footer</Title>
                </Footer>
            </Container>
            
        );
    }
}