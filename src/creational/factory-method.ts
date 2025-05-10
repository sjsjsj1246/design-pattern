abstract class ReportCreator {
    // 팩토리 메서드: 서브클래스에서 구체적인 Report 객체를 생성하도록 강제
    public abstract createReport(): Report;

    // 공통 로직: 생성된 Report 객체를 사용하여 보고서를 생성
    public generateReport(data: string): string {
        const report = this.createReport(); // 팩토리 메서드 호출
        return report.generate(data); // 생성된 객체의 메서드 호출
    }
}

class PDFReportCreator extends ReportCreator {
    // PDF 형식의 Report 객체를 생성
    public createReport(): Report {
        return new PDFReport();
    }
}

class HTMLReportCreator extends ReportCreator {
    // HTML 형식의 Report 객체를 생성
    public createReport(): Report {
        return new HTMLReport();
    }
}

interface Report {
    // Report 객체가 구현해야 할 공통 메서드
    generate(data: string): string;
}

class PDFReport implements Report {
    // PDF 형식의 보고서를 생성하는 구체적인 구현
    public generate(data: string): string {
        return `PDF Report: ${data}`;
    }
}

class HTMLReport implements Report {
    // HTML 형식의 보고서를 생성하는 구체적인 구현
    public generate(data: string): string {
        return `<html><body><h1>HTML Report</h1><p>${data}</p></body></html>`;
    }
}

function clientApp(creator: ReportCreator, data: string) {
    // 클라이언트는 구체적인 Creator 클래스에 의존하지 않음
    console.log("Generating report...");
    console.log(creator.generateReport(data)); // 공통 인터페이스 사용
}

console.log("App: Generating a PDF report.");
clientApp(new PDFReportCreator(), "This is the PDF report content.");

console.log("App: Generating an HTML report.");
clientApp(new HTMLReportCreator(), "This is the HTML report content.");
