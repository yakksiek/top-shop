import { useState } from 'react';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordResetCodeForm from './PasswordResetCodeForm';

interface PasswordRecoveryFlowProps {
    onCancel: () => void;
    onComplete: () => void;
}

function PasswordRecoveryFlow({ onCancel, onComplete }: PasswordRecoveryFlowProps) {
    const [step, setStep] = useState<'email' | 'verify'>('email');
    const [email, setEmail] = useState('');

    if (step === 'email') {
        return (
            <PasswordRecoveryForm
                onCancel={onCancel}
                onSuccess={submittedEmail => {
                    setEmail(submittedEmail);
                    setStep('verify');
                }}
            />
        );
    }

    return <PasswordResetCodeForm email={email} onComplete={onComplete} />;
}

export default PasswordRecoveryFlow;
