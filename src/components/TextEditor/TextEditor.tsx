import React from "react";
import { Box, TextField } from "@mui/material";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "katex/dist/katex.min.css";

interface TextEditorProps {
    preview: boolean;
    text: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function TextEditor({ preview, text, handleChange }:TextEditorProps) {
    return (
        <Box>
            {preview ?
            <ReactMarkdown 
                children={text}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={theme}
                                language={match[1]}
                                PreTag="div"
                                // {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                            {children}
                            </code>
                        )
                    }
                  }}
            />
            :
            <TextField 
                multiline
                fullWidth
                value={text}
                onChange={handleChange}
            />
            }
        </Box>
    )
}