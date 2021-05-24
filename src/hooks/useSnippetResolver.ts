import {Rule} from '../types/Rule';
import {useState, useEffect} from 'react';
import SnippetReference from '../http/SnippetReference';

export default function useSnippetResolver(snippetId: string): any {
  const [bad, setBad] = useState<Rule | undefined>(undefined);
  const [good, setGood] = useState<Rule | undefined>(undefined);
  const snippetRef = new SnippetReference();

  useEffect(() => {
    snippetRef.getBySnippetId(snippetId).then((documents) => {
      const [badSnippet] = documents;
      setBad(badSnippet);

      snippetRef.getBySnippetId(badSnippet.suggestion).then((documents) => {
        const [goodSnippet] = documents;
        setGood(goodSnippet);
      });
    });
  }, [snippetId]);

  return {bad, good};
}
