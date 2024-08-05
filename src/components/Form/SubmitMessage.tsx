type MessageType = 'success' | 'error';

interface SubmitMessageProps {
    message: string;
    type: MessageType;
}

function SubmitMessage({ message, type }: SubmitMessageProps) {
    const textColour = type === 'success' ? 'green' : 'red';

    return <p style={{ color: textColour }}>{message}</p>;
}

export default SubmitMessage;
