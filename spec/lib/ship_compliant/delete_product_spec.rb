require "spec_helper"

module ShipCompliant
  describe DeleteProduct do

    before { savon.mock! }
    after { savon.unmock! }

    let(:message) do
      {
        'Request' => {
          'Security' => {
            'PartnerKey' => 'abc-123',
            'Username' => 'bob@example.com',
            'Password' => 'secret'
          },
          'Product' => {
            'BottleSizeML' => 123,
            'DefaultWholesaleCasePrice' => 150
          },
          'UpdateMode' => 'DoWackaDo'
        }
      }
    end
    let(:response) { File.read('spec/fixtures/add_update_product.xml') }

    context "product" do
      it "queries the client with product an update mode" do
        DeleteProduct.stub(:delete_product) { {} }
        result = DeleteProduct.product({
          bottle_size_ml: 123,
          default_wholesale_case_price: 150
        }, options: { update_mode: 'DoWackaDo'})

        result.should be_kind_of(AddUpdateProductResult)
      end

      it "update mode defaults to ErrorOnExisting" do
        message['Request']['UpdateMode'] = 'ErrorOnExisting'
        savon.expects(:delete_product)
          .with(message: message).returns(response)

        DeleteProduct.product({
          bottle_size_ml: 123,
          default_wholesale_case_price: 150
        })
      end
    end

  end
end
