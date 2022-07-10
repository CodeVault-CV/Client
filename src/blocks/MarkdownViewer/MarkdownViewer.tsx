import React from "react";
import { Box, TextField } from "@mui/material";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "katex/dist/katex.min.css";

interface MarkdownViewerProps {
    preview: boolean;
    text: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function MarkdownViewer({ preview, text, handleChange }:MarkdownViewerProps) {
    return (
        <Box>
            {preview ?
            <Box sx={{
                border: 1,
                borderRadius: 1,
                borderColor: "lightgray",
                px: 2
            }}>
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
            </Box>
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