abstract class ReportCreator {
    public abstract createReport(): Report;

    public generateReport(data: string): string {
        const report = this.createReport();
        return report.generate(data);
    }
}

class PDFReportCreator extends ReportCreator {
    public createReport(): Report {
        return new PDFReport();
    }
}

class HTMLReportCreator extends ReportCreator {
    public createReport(): Report {
        return new HTMLReport();
    }
}

interface Report {
    generate(data: string): string;
}

class PDFReport implements Report {
    public generate(data: string): string {
        return `PDF Report: ${data}`;
    }
}

class HTMLReport implements Report {
    public generate(data: string): string {
        return `<html><body><h1>HTML Report</h1><p>${data}</p></body></html>`;
    }
}

function clientApp(creator: ReportCreator, data: string) {
    console.log("Generating report...");
    console.log(creator.generateReport(data));
}

console.log("App: Generating a PDF report.");
clientApp(new PDFReportCreator(), "This is the PDF report content.");

console.log("App: Generating an HTML report.");
clientApp(new HTMLReportCreator(), "This is the HTML report content.");
