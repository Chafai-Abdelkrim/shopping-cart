import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    layout?: boolean;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down' | 'none';
    distance?: number;
    durationIn?: number;
    durationOut?: number;
}

