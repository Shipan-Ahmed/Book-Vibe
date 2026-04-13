import { useContext } from 'react';
import { Bar, BarChart, XAxis, YAxis, Cell, LabelList, ResponsiveContainer } from 'recharts';
import { BooksCustomContext } from './CustomContext/BooksContext';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const margin = {
    top: 30,
    right: 30,
    left: 20,
    bottom: 5,
};

const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${(x + (2 * width)) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

export default function CustomizeBarShape() {
    const readBooks = useContext(BooksCustomContext).readBooks;

    const eachBookPages = readBooks.map((book, index) => ({
        name: book.bookName || `Book ${index + 1}`,
        uv: book.totalPages
    }));

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={eachBookPages} margin={margin}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar
                        dataKey="uv"
                        shape={<TriangleBar />}
                        label={{ position: 'top' }} 
                    >
                        
                        {eachBookPages.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}

                     
                        <LabelList
                            dataKey="uv"
                            position="top"
                            fill="#FFFFFF"
                            formatter={(value) => `${value}`}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}