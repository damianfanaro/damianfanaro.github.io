---
layout: post
title: "VIM Cheat Sheet"
date: 2016-11-08
comments: true
category: general
tags: [cheat-sheet, unix]
description: A bunch of shortcuts to master the popular VIM editor.
---

# Cursor Movement

- **`h`** - move left
- **`j`** - move down
- **`k`** - move up
- **`l`** - move up
- **`w`** - jump by start of words (punctuation considered words)
- **`W`** - jump by words (spaces separate words)
- **`e`** - jump to end of words (punctuation considered words)
- **`E`** - jump to end of words (no punctuation)
- **`b`** - jump backward by words (punctuation considered words)
- **`B`** - jump backward by words (no punctuation)
- **`0`** - (zero) start if line
- **`^`** - first non-blank character of line
- **`$`** - end of line
- **`G`** - **Go-To** command (prefix with number - e.g. 5G goes to line 5) 

_Note: prefix a cursor movement command with a number to repeat it. For example, `4j` moves down 4 lines._

# Insert Mode - Inserting / Appending Text

- **`i`** - start insert mode at cursor
- **`I`** - insert at the beginning of the line
- **`a`** - append after the cursor
- **`A`** - append at the end of the line
- **`o`** - open (append) blank line below current line (no need to press return)
- **`O`** - open blank line above current line
- **`ea`** - append at end of word
- **`Esc`** - exit insert mode 

# Editing

- **`r`** - replace a single character (does not use insert mode)
- **`J`** - join line below to the current one
- **`cc`** - change (replace) an entire line
- **`cw`** - change (replace) to the end of word
- **`c$`** - change (replace) to the end of line
- **`s`** - delete character at cursor and substitute text
- **`S`** - delete line at cursor and substitute text (same as `cc`)
- **`xp`** - transpose two letters (delete and paste)
- **`u`** - undo
- **`.`** - repeat the last command

# Marking Text (visual mode)

- **`v`** - start visual mode, mark lines, the do command (such as y-yank)
- **`V`** - start **Linewise** visual mode
- **`o`** - move to other end of marked area
- **`Ctrl + v`** - start visual block mode
- **`O`** - move to other corner of block
- **`aw`** - mark a word
- **`ab`** - a () block (with braces)
- **`aB`** - a {} block (with brackets) 
- **`ib`** - inner () block
- **`iB`** - inner {} block
- **`Esc`** - exit visual mode

# Visual Commands

- **`>`** - shift right
- **`<`** - shift left
- **`y`** - yank (copy) marked text
- **`d`** - delete marked text
- **`~`** - switch case

# Cut & Paste

- **`yy`** - yank (copy) a line
- **`2yy`** - yank 2 lines
- **`yw`** - yank word
- **`y$`** - yank to end of line
- **`p`** - put (paste) the clipboard after cursor
- **`P`** - put (paste) before cursor
- **`dd`** - delete (cut) a line
- **`dw`** - delete (cut) the current word
- **`x`** - delete (cut) current character

# Exiting

- **`:w`** - write (save) the file, but don't exit
- **`:wq`** - write (save) and quit
- **`:q`** - quit (fails if anything has changed)
- **`:q!`** - quit and throw away changes

# Search / Replace

- **`/pattern`** - search for pattern
- **`?pattern`** - search backward for pattern
- **`n`** - repeat search in same direction
- **`N`** - repeat search in opposite direction
- **`:%s/old/new/g`** - replace all old with new throughout file
- **`:%s/old/new/gc`** - replace all old with throughout file with confirmations

# Working With Multiple Files

- **`:e filename`** - edit a file in a new buffer
- **`:bnext (or :bn)`** - go to next buffer
- **`:bprev (or :bp)`** - go to previous buffer
- **`:bd`** - delete a buffer (close a file)
- **`:sp filename`** - open a file in a new buffer and split window
- **`Ctrl + ws`** - split windows
- **`Ctrl + ww`** - switch between windows
- **`Ctrl + wq`** - quit a window
- **`Ctrl + wv`** - splits window vertically