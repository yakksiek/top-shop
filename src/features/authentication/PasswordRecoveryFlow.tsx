import { useState } from 'react';
import PasswordRecoveryForm from './PasswordRecoveryForm';

interface PasswordRecoveryFlowProps {
    onCancel: () => void;
}

function PasswordRecoveryFlow({ onCancel }: PasswordRecoveryFlowProps) {
    const [step, setStep] = useState<'email' | 'verify'>('email');

    if (step === 'email') {
        return <PasswordRecoveryForm onCancel={onCancel} onSuccess={() => setStep('verify')} />;
    }

    // TODO: PasswordResetCodeForm lands in commit 4 (will also start capturing the email from step 1).
    return null;
}

export default PasswordRecoveryFlow;
