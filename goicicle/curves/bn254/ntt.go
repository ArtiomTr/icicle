// Copyright 2023 Ingonyama
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by Ingonyama DO NOT EDIT

package bn254

import (
	"errors"
	"fmt"
	"unsafe"

	"github.com/ingonyama-zk/icicle/goicicle"
)

// #cgo CFLAGS: -I./include/
// #cgo CFLAGS: -I/usr/local/cuda/include
// #cgo LDFLAGS: -L${SRCDIR}/../../ -lbn254
// #include "ntt.h"
import "C"

const (
	NONE = 0
	DIF  = 1
	DIT  = 2
)

func Ntt(scalars *[]G1ScalarField, isInverse bool, deviceId int) uint64 {
	scalarsC := (*C.BN254_scalar_t)(unsafe.Pointer(&(*scalars)[0]))

	ret := C.ntt_cuda_bn254(scalarsC, C.uint32_t(len(*scalars)), C.bool(isInverse), C.size_t(deviceId))

	return uint64(ret)
}

func NttBatch(scalars *[]G1ScalarField, isInverse bool, batchSize, deviceId int) uint64 {
	scalarsC := (*C.BN254_scalar_t)(unsafe.Pointer(&(*scalars)[0]))
	isInverseC := C.bool(isInverse)
	batchSizeC := C.uint32_t(batchSize)
	deviceIdC := C.size_t(deviceId)

	ret := C.ntt_batch_cuda_bn254(scalarsC, C.uint32_t(len(*scalars)), batchSizeC, isInverseC, deviceIdC)

	return uint64(ret)
}

func EcNtt(values *[]G1ProjectivePoint, isInverse bool, deviceId int) uint64 {
	valuesC := (*C.BN254_projective_t)(unsafe.Pointer(&(*values)[0]))
	deviceIdC := C.size_t(deviceId)
	isInverseC := C.bool(isInverse)
	n := C.uint32_t(len(*values))

	ret := C.ecntt_cuda_bn254(valuesC, n, isInverseC, deviceIdC)

	return uint64(ret)
}

func EcNttBatch(values *[]G1ProjectivePoint, isInverse bool, batchSize, deviceId int) uint64 {
	valuesC := (*C.BN254_projective_t)(unsafe.Pointer(&(*values)[0]))
	deviceIdC := C.size_t(deviceId)
	isInverseC := C.bool(isInverse)
	n := C.uint32_t(len(*values))
	batchSizeC := C.uint32_t(batchSize)

	ret := C.ecntt_batch_cuda_bn254(valuesC, n, batchSizeC, isInverseC, deviceIdC)

	return uint64(ret)
}

func GenerateTwiddles(d_size int, log_d_size int, inverse bool) (up unsafe.Pointer, err error) {
	domain_size := C.uint32_t(d_size)
	logn := C.uint32_t(log_d_size)
	is_inverse := C.bool(inverse)

	dp := C.build_domain_cuda_bn254(domain_size, logn, is_inverse, 0, 0)

	if dp == nil {
		err = errors.New("nullptr returned from generating twiddles")
		return unsafe.Pointer(nil), err
	}

	return unsafe.Pointer(dp), nil
}

// Reverses d_scalars in-place
func ReverseScalars(d_scalars unsafe.Pointer, len int) (int, error) {
	scalarsC := (*C.BN254_scalar_t)(d_scalars)
	lenC := C.int(len)
	if success := C.reverse_order_scalars_cuda_bn254(scalarsC, lenC, 0, 0); success != 0 {
		return -1, errors.New("reversing failed")
	}
	return 0, nil
}

func Interpolate(scalars, twiddles, cosetPowers unsafe.Pointer, size int, isCoset bool) unsafe.Pointer {
	size_d := size * 32
	dp, err := goicicle.CudaMalloc(size_d)

	if err != nil {
		return nil
	}

	d_out := (*C.BN254_scalar_t)(dp)
	scalarsC := (*C.BN254_scalar_t)(scalars)
	twiddlesC := (*C.BN254_scalar_t)(twiddles)
	cosetPowersC := (*C.BN254_scalar_t)(cosetPowers)
	sizeC := C.uint(size)

	var ret C.int
	if isCoset {
		ret = C.interpolate_scalars_on_coset_cuda_bn254(d_out, scalarsC, twiddlesC, sizeC, cosetPowersC, 0, 0)
	} else {
		ret = C.interpolate_scalars_cuda_bn254(d_out, scalarsC, twiddlesC, sizeC, 0, 0)
	}
	if ret != 0 {
		fmt.Print("error interpolating")
	}

	return unsafe.Pointer(d_out)
}

func Evaluate(scalars_out, scalars, twiddles, coset_powers unsafe.Pointer, scalars_size, twiddles_size int, isCoset bool) int {
	scalars_outC := (*C.BN254_scalar_t)(scalars_out)
	scalarsC := (*C.BN254_scalar_t)(scalars)
	twiddlesC := (*C.BN254_scalar_t)(twiddles)
	coset_powersC := (*C.BN254_scalar_t)(coset_powers)
	sizeC := C.uint(scalars_size)
	twiddlesC_size := C.uint(twiddles_size)

	var ret C.int
	if isCoset {
		ret = C.evaluate_scalars_on_coset_cuda_bn254(scalars_outC, scalarsC, twiddlesC, twiddlesC_size, sizeC, coset_powersC, 0, 0)
	} else {
		ret = C.evaluate_scalars_cuda_bn254(scalars_outC, scalarsC, twiddlesC, twiddlesC_size, sizeC, 0, 0)
	}

	if ret != 0 {
		fmt.Print("error interpolating")
		return -1
	}

	return 0
}

func VecScalarAdd(in1_d, in2_d unsafe.Pointer, size int) int {
	in1_dC := (*C.BN254_scalar_t)(in1_d)
	in2_dC := (*C.BN254_scalar_t)(in2_d)
	sizeC := C.uint(size)

	ret := C.add_scalars_cuda_bn254(in1_dC, in1_dC, in2_dC, sizeC, 0)

	if ret != 0 {
		fmt.Print("error adding scalar vectors")
		return -1
	}

	return 0
}

func VecScalarSub(in1_d, in2_d unsafe.Pointer, size int) int {
	in1_dC := (*C.BN254_scalar_t)(in1_d)
	in2_dC := (*C.BN254_scalar_t)(in2_d)
	sizeC := C.uint(size)

	ret := C.sub_scalars_cuda_bn254(in1_dC, in1_dC, in2_dC, sizeC, 0)

	if ret != 0 {
		fmt.Print("error subtracting scalar vectors")
		return -1
	}

	return 0
}

func ToMontgomery(d_scalars unsafe.Pointer, len int) (int, error) {
	scalarsC := (*C.BN254_scalar_t)(d_scalars)
	lenC := C.uint(len)
	if success := C.to_montgomery_scalars_cuda_bn254(scalarsC, lenC, 0); success != 0 {
		return -1, errors.New("reversing failed")
	}
	return 0, nil
}

func FromMontgomery(d_scalars unsafe.Pointer, len int) (int, error) {
	scalarsC := (*C.BN254_scalar_t)(d_scalars)
	lenC := C.uint(len)
	if success := C.from_montgomery_scalars_cuda_bn254(scalarsC, lenC, 0); success != 0 {
		return -1, errors.New("reversing failed")
	}
	return 0, nil
}

func AffinePointFromMontgomery(d_points unsafe.Pointer, len int) (int, error) {
	pointsC := (*C.BN254_affine_t)(d_points)
	lenC := C.uint(len)

	if success := C.from_montgomery_aff_points_cuda_bn254(pointsC, lenC, 0); success != 0 {
		return -1, errors.New("reversing failed")
	}
	return 0, nil
}

func G2AffinePointFromMontgomery(d_points unsafe.Pointer, len int) (int, error) {
	pointsC := (*C.BN254_g2_affine_t)(d_points)
	lenC := C.uint(len)

	if success := C.from_montgomery_aff_points_g2_cuda_bn254(pointsC, lenC, 0); success != 0 {
		return -1, errors.New("reversing failed")
	}
	return 0, nil
}