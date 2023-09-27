import { PLACEHOLDER_QUERRY } from "@/constant/constant";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-dark.css";
import CodeEditor from "react-simple-code-editor";
import { Button } from "../Button";

interface IEditorProps extends IHeaderProps {
  code: string;
  setCode: (arg: string) => void;
}
interface IHeaderProps {
  onRunSQL1Click: () => void;
  isLoadingSQL1Click?: boolean;
  isRunButtonDisabled?:boolean;
}
export function Editor(props: IEditorProps) {
  const { onRunSQL1Click, isLoadingSQL1Click, code, setCode,isRunButtonDisabled } = props;

  return (
    <div className="flex-1 flex flex-col">
      <Header
        onRunSQL1Click={onRunSQL1Click}
        isLoadingSQL1Click={!!isLoadingSQL1Click}
        isRunButtonDisabled={isRunButtonDisabled}
      />
      <div className="flex flex-col flex-1">
        <CodeEditor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code: string) => highlight(code, languages.sql, "sql")}
          padding={16}
          placeholder={PLACEHOLDER_QUERRY}
          className="text-sm flex-1 outline-none border-0 "
        />
      </div>
    </div>
  );
}

function Header(props: IHeaderProps) {
  const { onRunSQL1Click, isLoadingSQL1Click,isRunButtonDisabled } = props;
  return (
    <div className="flex justify-between bg-codebg  ">
      <div className="py-3 px-4 bg-codebg -mb-1 mt-0 ">Input</div>
      <div className="flex  py-3 flex-1 justify-end bg-white border-border border-solid border-l border-b rounded-bl">
        <Button onClick={onRunSQL1Click} isLoading={isLoadingSQL1Click} disabled={isRunButtonDisabled}>
          Run SQL
        </Button>
      </div>
    </div>
  );
}
