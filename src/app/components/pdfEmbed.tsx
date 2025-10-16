interface PDFViewerProps {
  pdfSRC: string;
}

export default function PDFViewer({ pdfSRC }: PDFViewerProps) {
  return (
    <iframe
      src={`${pdfSRC}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
      className="h-[75vh] w-[32vw] border-0 max-h-full object-contain rounded-lg shadow-lg"
      style={{
        display: "block",
        overflow: "hidden",
      }}
    />
  );
}
