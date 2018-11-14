import { StyleSheet } from 'react-native';
import iPhoneSize from '../../../helpers/utils';
import colors from '../../../styles/colors'; 

let termsTextSize = 13;
let headingTextSize = 30;
if (iPhoneSize() === 'small') {
  termsTextSize = 12;
  headingTextSize = 26;
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: 'flex',
    },
    logo: {
        width: 60,
        height: 70, 
        marginTop: 10,
        marginBottom: 40,
      },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        padding: 25,
        paddingTop: 50
      },
    welcomeText: {
        fontSize: headingTextSize,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
      },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
      color: colors.white,
      fontSize: termsTextSize,
      fontWeight: 'normal',
    },
    linkButton: {
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    facebookButtonIcon: {
        color: colors.white,
        position: 'relative',
        left: 20,
        zIndex: 8,
      },
});
  
export default styles;