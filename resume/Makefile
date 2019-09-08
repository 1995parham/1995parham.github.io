.PHONY: examples

CC = xelatex
RESUME_SRCS = $(shell find resume -name '*.tex')

resume.pdf: resume.tex $(RESUME_SRCS)
	$(CC) $<

clean:
	rm -rf *.pdf
