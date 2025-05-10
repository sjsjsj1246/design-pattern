// 빌더 인터페이스: SQL 쿼리를 단계적으로 생성
interface SQLQueryBuilder {
    select(columns: string[]): void;
    from(table: string): void;
    where(condition: string): void;
    getQuery(): string;
}

// 구체적인 빌더: SQL 쿼리를 구성
class MySQLQueryBuilder implements SQLQueryBuilder {
    private queryParts: { select?: string; from?: string; where?: string } = {};

    public select(columns: string[]): void {
        this.queryParts.select = `SELECT ${columns.join(", ")}`;
    }

    public from(table: string): void {
        this.queryParts.from = `FROM ${table}`;
    }

    public where(condition: string): void {
        this.queryParts.where = `WHERE ${condition}`;
    }

    public getQuery(): string {
        const { select, from, where } = this.queryParts;
        if (!select || !from) {
            throw new Error("SELECT and FROM clauses are required.");
        }
        return [select, from, where].filter(Boolean).join(" ");
    }
}

// 디렉터: SQL 쿼리를 특정 방식으로 구성
class SQLQueryDirector {
    private builder!: SQLQueryBuilder;

    public setBuilder(builder: SQLQueryBuilder): void {
        this.builder = builder;
    }

    public buildSimpleQuery(): void {
        this.builder.select(["*"]);
        this.builder.from("users");
    }

    public buildFilteredQuery(): void {
        this.builder.select(["id", "name", "email"]);
        this.builder.from("users");
        this.builder.where("age > 18");
    }
}

// 클라이언트 코드: 디렉터와 빌더를 사용하여 SQL 쿼리 생성
const director = new SQLQueryDirector();
const builder = new MySQLQueryBuilder();
director.setBuilder(builder);

console.log("Building Simple Query:");
director.buildSimpleQuery();
console.log(builder.getQuery());

console.log("Building Filtered Query:");
director.buildFilteredQuery();
console.log(builder.getQuery());

console.log("Building Custom Query:");
builder.select(["username", "created_at"]);
builder.from("accounts");
builder.where("status = 'active'");
console.log(builder.getQuery());
