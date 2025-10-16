interface PDFViewerProps {
  pdfSRC: string;
}

export default function PDFViewer({ pdfSRC }: PDFViewerProps) {
  return (
    <iframe
      src={`${pdfSRC}#toolbar=0&navpanes=0&scrollbar=0&view=FitV`}
      className="h-[75vh] w-[65vw] lg:w-[55vh] lg:h-[70vh] border-0 max-h-full object-contain rounded-lg shadow-lg"
      style={{
        display: "block",
        overflow: "hidden",
        background: "transparent",
      }}
    />
  );
}
