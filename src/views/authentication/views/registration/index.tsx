import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { observer } from 'mobx-react-lite';
import { CustomTextInput } from '../../../../components/customTextInput';
import { MainButton } from '../../../../components/mainButton';
import { IStackNavigation, IRoute } from '../../../../entities';
import { useAppStore } from '../../../../storage';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const RegistrationView: FC<Props> = observer(({ navigation }) => {
    const { RegistrationStore: { fields: { name, password, phone, email, pin }, state: { disabled, inProgress } },
        RegistrationPresenter: { updateField, handleRegistrate } } = useAppStore();

    return (
        <ScrollView testID={"ScrollViewTestID"}style={styles.container} keyboardDismissMode='interactive' keyboardShouldPersistTaps={'handled'}>
            <View style={styles.inputsContainer}>
                <CustomTextInput value={name} onChangeText={(text: string) => updateField('name', text)} placeholder={'name'} isDark={false} testID='inputNameView' />
                <CustomTextInput value={password} onChangeText={(text: string) => updateField('password', text)} placeholder={'password'} isDark={false} testID='inputPasswordView' />
                <CustomTextInput keyboardType={'numeric'} value={pin} onChangeText={(text: string) => updateField('pin', text)} placeholder={'pin'} isDark={false} testID='inputPinView' />
                <CustomTextInput value={phone} onChangeText={(text: string) => updateField('phone', text)} placeholder={'phone'} isDark={false} testID='inputphoneView' />
                <CustomTextInput value={email} onChangeText={(text: string) => updateField('email', text)} placeholder={'email'} isDark={false} testID='inputemailView' />
            </View>
            <View style={styles.mainButtonContainer}>
                <MainButton
                 testID='buttonRegistrateRegistrationView'
                 //accessibilityLabel={'buttonRegistrateRegistrationView'}
                  onPress={() => handleRegistrate(navigation)} 
                  title={'save'} 
                  disabled={disabled} 
                  inProgress={inProgress} />
            </View>
        </ScrollView>
    )
});
