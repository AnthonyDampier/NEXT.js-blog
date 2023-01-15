import { parseISO, format } from 'date-fns';

// receives a string date and returns a formatted date (LLLL d, yyyy)
export default function Date({ dateString }) {
    const date = parseISO(dateString);

    return (
        <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    );
}