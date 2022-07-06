import Avatar from '@mui/material/Avatar';

interface ProfileProps {
    name: string,
    // image
}

export default function Profile({ name }: ProfileProps) {
    return (
        <div>
            <Avatar />
            <p>{name}</p>
        </div>
    );
}