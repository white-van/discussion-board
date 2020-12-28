import axios from "axios";

import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  serverUrl,
} from "./";

jest.mock("axios");

const path = "/foo/bar";

describe("Get Request", () => {
  it("Appends a trailing slash if not present", async (done) => {
    await getRequest(path, null);
    expect(axios.get).toHaveBeenCalledWith(serverUrl + path + "/");
    done();
  });

  it("Includes searchParams if provided", async (done) => {
    const searchPath = "/foo/bar/";
    const params = "?value=10";
    await getRequest(searchPath, params);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(serverUrl + searchPath + params);
    done();
  });
});

describe("Delete Request", () => {
  it("Appends a trailing slash if not present", async (done) => {
    await deleteRequest(path);
    expect(axios.delete).toHaveBeenCalledWith(serverUrl + path + "/");
    done();
  });
});

describe("Patch Request", () => {
  it("Appends trailing slash if not present + called with data", async (done) => {
    const data = {
      foo: "bar",
    };
    await patchRequest(path, data);
    expect(axios.patch).toHaveBeenCalledWith(serverUrl + path + "/", data);
    done();
  });
});

describe("Post Request", () => {
  it("Appends trailing slash if not present + called with data", async (done) => {
    const data = {
      foo: "bar",
    };
    await postRequest(path, data);
    expect(axios.post).toHaveBeenCalledWith(serverUrl + path + "/", data);
    done();
  });
});
