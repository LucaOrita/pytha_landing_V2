import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';

export const title = 'Vertical Table';

export type Table1Props = {
  headers: Array<{
    id: string;
    width: string;
    header: string;
  }>;
  rows: Array<{
    id: string;
    cells: Array<{
      id: string;
      richText: SerializedEditorState<SerializedLexicalNode>;
    }>;
  }>;
};

const Example = ({ headers, rows }: Table1Props) => (
  <div className="bg-background my-8 w-full rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header.id} style={{ width: header.width }}>
              {header.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {row.cells.map((cell) => (
              <TableCell key={cell.id}>
                <RichText data={cell.richText} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
