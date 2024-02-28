export default {
  template: `<div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="productModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ tempProduct.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <div
                :style="{
                    height: '100%',
                    backgroundImage: 'url(' + tempProduct.imageUrl + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
              ></div>
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill"
                >{{ tempProduct.category }}</span
              >
              <p>商品描述：{{ tempProduct.description}}</p>
              <p>商品內容：{{ tempProduct.content }}</p>
              <del class="h6">原價 {{tempProduct.origin_price }} 元</del>
              <div class="h5">現在只要 {{tempProduct.price }} 元</div>
              <div>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                v-model.number="newQty"
                  />
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addToCart(tempProduct.id,newQty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      productModal: '',
      newQty: 1
    }
  },
  props: ["tempProduct", "setQty", "addToCart"],
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: "static",
    });
  },
  methods:{
    openModalItem() {
      this.productModal.show();
      this.newQty = 1
    },
    hideModalItem() {
      this.productModal.hide();
    },
    updateQty() {
        this.$emit('newQty', this.newQty);
    }
  }
};
