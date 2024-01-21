export interface Service {
    url: string
    token: string
}

export class Request<T>{
    data: T | null;

    constructor(data: T | null) {
        this.data = data;
    }

    public Data(): T | null {
        return this.data;
    }
}


export class Response<T>{
    data: T | null;
    status: number | null;

    constructor(data: T | null) {
        this.data = data;
        this.status = null;
    }

    public Status(): number | null {
        return this.status;
    }

    public Response(): T | null {
        return this.data;
    }
}


export class RestClient {
    service:Service;
    constructor(service: Service) {
        this.service = service;
    }

    public Service():Service{
        return this.service;
    }

    public async Request<TRequestData, TResponse> (data: TRequestData | null): Promise<Response<TResponse>> {
        // simulating service
        return new Response<TResponse>(data as TResponse);
    }
}